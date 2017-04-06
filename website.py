from flask import Flask, send_from_directory, render_template, request

app = Flask(__name__)

@app.route('/')
def send_static():
    return app.send_static_file('GamingBlog.html')

@app.route('/gaming_blog_contact.html', methods=['GET', 'POST'])
def send_contact():
    if request.method == 'POST':
        name = request.form['name']
        comments = request.form['comments']
        email = request.form['email']
        return render_template('gaming_blog_contact.html', name=name, comments=comments, email=email)
    else:
        return render_template('gaming_blog_contact.html')


@app.route('/<path:path>')
def send_static2(path):
    return send_from_directory('static', path)


if __name__ == '__main__':
    app.run(debug=True)
    # app.run()
