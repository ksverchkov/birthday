pipeline {
    agent {
        label '*' //worker label
    }
    stages {
        stage('Tests Apache') {
            steps {
                sh '''echo "Apache status..."
systemctl --type=service --state=running  | grep apache2.service'''
            }
        }
        stage('Test workdir') {
            steps {
                sh ''' echo "checking working director"
                ls -lahtr /var/www/html/index.html
                ls -lahtr /var/www/html/assets/ '''
            }
        }
        stage('Change name') {
            steps {
            //change name into tags
           sh ''' sed -i 's/Ира/Кира/' /var/www/html/birthday/index.html
                  sed -i 's/Ира/Кира/' /var/www/html/index.html
              '''
            }
        }
    }
}
