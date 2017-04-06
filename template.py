from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/<input>')
def hello(input=None):
    return render_template('gaming_blog_contact.html', name=input)

if __name__ == '__main__':
    app.run(debug=True)
    # app.run()