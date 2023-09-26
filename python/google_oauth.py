from google.oauth2.service_account import Credentials

SCOPES = ['https://www.googleapis.com/auth/gmail.send']

def get_tokens():
    credentials = Credentials.from_service_account_file(
        'ServiceAccount.json',
        scopes=SCOPES
    )
    credentials = credentials.with_subject('infoelectro@electrogames.iam.gserviceaccount.com')
    return {"access_token": credentials.get_access_token()}
