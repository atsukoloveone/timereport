HOST=gce;
echo Rsyncing webclient
rsync  --progress ../frontend/bundle.js $HOST:/var/www/html/timereport/frontend/
echo Rsyncing webserver
#rsync --progress ../app.js $HOST:/var/www/html/timereport/
#rsync -r --progress ../routes/ $HOST:/var/www/html/timereport/routes/
echo Done!
