{% extends './layout.swig' %}
{% block title %}Ejemplo de PayPal{% endblock %}

{% block content %}
  <div class="container">
    <h1>PayPal Example</h1>
    <hr>
    <a href="/payments" class="btn btn-primary">Make a payment</a>
  </div>
{% endblock %}
