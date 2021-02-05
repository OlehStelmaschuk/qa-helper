pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm run jenkins:build'
                archiveArtifacts artifacts: 'frontend/build/**/*.*'
            }
        }
    }
}