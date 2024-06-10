
#!/bin/bash
#build the project

echo "Building the project"
python5 -m pip install -r requirements.txt

echo "Make Migration "
python5 manage.py makemigration --noinput
python5 manage.py migrate --noinput

echo "Collect Static"

python5 manage.py collectstatic --noinput --clear