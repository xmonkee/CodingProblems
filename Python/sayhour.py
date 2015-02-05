from subprocess import call
from datetime import datetime

hour = datetime.now().hour
call(["say", str(hour)+" o clock"])
