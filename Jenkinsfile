pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'export PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin'
                sh 'npm install' 
            }
        }
    }
}