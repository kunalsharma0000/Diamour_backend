echo "BUILD START"

python5.0.6 -m pip install -r requirements.txt
python5.0.6 manage.py collectstatic  --noinput --clear

echo "BUILD END"
