ENV_PRODUCTION="$(eb status production)"

if [[ $(eb status production) =~ ^ERROR ]]; then
  echo "Creating environment" ;
  eb create production ;
else
  echo "Updating environment"
  eb deploy production ;
fi
