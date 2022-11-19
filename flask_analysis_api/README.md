pip install virtualenv, or 
pip3 install virtualenvwrapper

pip install flask

# Do this to setup the virtualenvwrapper environment
export PATH="/usr/local/opt/python@3/libexec/bin:$PATH"

export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Devel
export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV=/usr/local/bin/virtualenv
source /usr/local/bin/virtualenvwrapper.shf

# If the above didn't work, try this:
source `which virtualenvwrapper.sh`

mkvirtualenv flask_analysis_api