{% extends './layout.swig' %}
{% block title %}Payment{% endblock %}

{% block content %}
  <div class="container">
    <h1>Checkout</h1>
    <hr>

    <div class="row">
      <div class="col-sm-6">
        <form id="payment" action="/" method="post">
          <fieldset>
            <legend>Payment Information</legend>
            <div class="form-group">
              <label for="payment_concept">Description</label>
              <input type="text" class="form-control" name="payment_concept" id="payment_concept" value="This is a brief payment description">
            </div>
            <div class="form-group">
              <label for="payment_amount">Amount</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-usd"></i></span>
                <input type="text" class="form-control" name="payment_amount" id="payment_amount" value="1500">
              </div>
            </div>
          </fieldset>
          <hr>
          <fieldset>
            <legend >Card Details</legend>
            <div class="form-group">
              <label for="card_holder">Card Holder's FirstName</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" class="form-control" name="card_holder_firstname" id="card_holder_firstname" placeholder="Card Holder's FirstName" value="Juan">
              </div>
            </div>
            <div class="form-group">
              <label for="card_holder">Card Holder's LastName</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" class="form-control" name="card_holder_lastname" id="card_holder_lastname" placeholder="Card Holder's LastName" value="Pérez">
              </div>
            </div>
            <div class="form-group">
              <label for="card_number">Card Number</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-credit-card"></i></span>
                <input type="text" pattern="[0-9]{13,16}" class="form-control" name="card_number" id="card_number" placeholder="Card Number" value="4163124806148436">
              </div>
            </div>
            <div class="form-group">
              <label for="card_date">Card Expiry Date</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-calendar-o"></i></span>
                <input type="month" class="form-control" name="card_date" id="card_date" placeholder="Card Expiry Date" value="2020-07">
              </div>
            </div>
            <div class="form-group">
              <label for="card_ccv">CCV</label>
              <input type="number" class="form-control" name="card_ccv" id="card_ccv" placeholder="CCV" value="123">
            </div>
          </fieldset>

          <button type="submit" class="btn btn-primary">Pay Now</button>
        </form>
      </div>

      <div class="col-sm-6">
        <div class="spinner text-center" style="display: none">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
        <div class="alert alert-danger failed" style="display: none"></div>
        <div class="alert alert-success success" style="display: none"></div>
      </div>
    </div>
  </div>
{% endblock %}
