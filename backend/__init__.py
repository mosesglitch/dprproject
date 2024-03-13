from flask import Flask, request, jsonify,current_app, abort, redirect, flash, session,url_for
from models.models import Project,DPR,ProgressImages,Works,db_drop_and_create_all,setup_db,db


app=Flask(__name__)

with app.app_context(): 
        setup_db(app)
        db_drop_and_create_all()

@app.route("/details",methods=["POST"])
def get_dpr():
  project_id = request.args.get('project_id')
  dpr_date = request.args.get('dpr_date')
  dprs = DPR.query.filter_by(project_id=project_id, date=dpr_date).all()

  dpr_data = []
    for dpr in dprs:
        dpr_info = {
            'id': dpr.id,
            'date': dpr.date,
            'weather': dpr.weather,
            'images': [image.url for image in dpr.images],  # Get URLs of associated images
            'works': []  # List to store works information
        }

        # Retrieve works information for the current DPR
        works = Works.query.filter_by(dpr_id=dpr.id).all()
        for work in works:
            work_info = {
                'activity': work.activity,
                'planned_qty': work.planned_qty,
                'achieved_qty': work.achieved_qty,
                'cumulative': work.cumulative,
                'total_scope': work.total_scope,
                'remarks': work.remarks
            }
            dpr_info['works'].append(work_info)

        dpr_data.append(dpr_info)
    return jsonify({'message': 'Profile updated successfully','data':"haloo"}), 200

@app.route('/dpr', methods=['POST'])
def create_dpr():
    # Get data from the request JSON body
    data = request.json

    # Extract project ID and DPR data from the request
    project_id = data.get('project_id')
    dpr_date = data.get('date')
    weather = data.get('weather')
    images = data.get('images')
    works = data.get('works')
    lost_days = data.get('lost_days')
    issues = data.get('issues')

    # Create a new DPR record
    new_dpr = DPR(
        project_id=project_id,
        date=dpr_date,
        weather=weather,
        lost_days=lost_days,
        issues=issues
    )

    # Add images to the new DPR record
    for image_url in images:
        new_image = ProgressImages(url=image_url)
        new_dpr.images.append(new_image)

    # Add works to the new DPR record
    for work_data in works:
        new_work = Works(
            activity=work_data.get('activity'),
            planned_qty=work_data.get('planned_qty'),
            achieved_qty=work_data.get('achieved_qty'),
            cumulative=work_data.get('cumulative'),
            total_scope=work_data.get('total_scope'),
            remarks=work_data.get('remarks')
        )
        new_dpr.works.append(new_work)

    # Save the new DPR record to the database
    db.session.add(new_dpr)
    db.session.commit()

    # Return a success message
    return jsonify({'message': 'DPR record created successfully'}), 201
if __name__=="__main__":
    app.run(port=2500)