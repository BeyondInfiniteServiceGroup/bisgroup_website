from flask import Flask
from site_files.routes.main_routes import main

def create_app():
    app = Flask(__name__)
    # Load configuration
    app.config.from_pyfile('../config.py')

    # Register blueprints
    app.register_blueprint(main)

    return app