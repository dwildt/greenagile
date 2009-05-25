# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_GreenAgile_session',
  :secret      => '631dc3c0216feb3f19833abb0b881cbe1018f3691ea9087d71da47fb67bb4dcb8edb97687ee03a2562e27615b70717d43d7bb0bedd1605167adc5f5981b5698f'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
