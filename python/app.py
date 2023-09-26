
import os
import base64
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Initialize the Gmail API
def init_service():
    SCOPES = ['https://www.googleapis.com/auth/gmail.send']

    creds = None
    if os.path.exists('token.json'):
        with open('token.json', 'r') as token_file:
            creds = Credentials.from_authorized_user_file('token.json', SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)

        with open('token.json', 'w') as token_file:
            token_file.write(creds.to_json())

    return build('gmail', 'v1', credentials=creds)

def send_verification_email(service, to_email):
    from_email = "infoelectro@electrogames.iam.gserviceaccount.com"  # Replace with your Gmail address

    msg = MIMEMultipart('alternative')
    msg['Subject'] = "Email Verification"
    msg['From'] = from_email
    msg['To'] = to_email

    text = """\
    Hi,
    Please click the link below to verify your email address.
    http://example.com/verify
    """
    html = """\
    <html>
      <head></head>
      <body>
        <p>Hi,<br>
           Please click the <a href="http://example.com/verify">link</a> to verify your email address.
        </p>
      </body>
    </html>
    """

    msg.attach(MIMEText(text, 'plain'))
    msg.attach(MIMEText(html, 'html'))

    # Encode the message using base64
    raw_message_bytes = base64.urlsafe_b64encode(msg.as_bytes())
    raw_message = raw_message_bytes.decode("utf-8")

    message = (service.users().messages().send(userId='me', body={'raw': raw_message}).execute())

if __name__ == '__main__':
    service = init_service()
    to_email = "fariscp7660@gmail.com"  
    send_verification_email(service, to_email)


