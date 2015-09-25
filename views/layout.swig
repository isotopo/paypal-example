<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>{% block title %}{% endblock %}</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <script src="js/built/vendors.js"></script>
  <style>
    .loading { opacity: .5; }
    .spinner {
      padding: 120px;
      font-size: 400%;
    }
    .alert.failed,
    .alert.success {
      width: 100%;
      text-align: center;
    }
  </style>
</head>
<body>
  {% block content %}{% endblock %}
  <script src="js/built/app.js"></script>
</body>
</html>
