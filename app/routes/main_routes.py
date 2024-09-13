from flask import Blueprint, render_template, url_for, redirect, request

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('home.html')

@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/projects')
def projects():
    return render_template('projects.html')

@main.route('/contact')
def contact():
    return render_template('contact.html')

@main.route('/submit_contact', methods=['POST'])
def submit_contact():
    # Placeholder for form handling
    name = request.form.get('name')
    subject = f"BIS Group website: Contact initiated by {name}."
    email = request.form.get('email')
    message = request.form.get('message')
    print(f"Contact form submitted: {name}, {subject}, {email}, {message}")
    return redirect(url_for('main.contact'))