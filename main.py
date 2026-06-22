import requests
import json
from sanic import Sanic, html, file, json as sjson

headers = {
    'User-Agent': "Python 3.13.3"
}
baseurl = 'https://wiki.payphonetag.com/wiki/'

app = Sanic("ppt-wiki-photo-checker")

@app.route('/')
async def index(request):
    return html("<title>PPTWPC</title><h1>I exist.</h1>")

@app.get('/api/photo')
async def photo(request):
    cabinet_id = request.args.get('cabinet')
    if not cabinet_id:
        return sjson({'error':'No cabinet ID provided'})
    url = requests.get(f'https://wiki.payphonetag.com/rest.php/v1/search/page?q=File:{cabinet_id}&limit=1', headers=headers)
    response = json.loads(url.text)
    return sjson({'file': baseurl + response["pages"][0]["key"]})