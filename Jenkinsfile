pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean package'  // Build a Maven project
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'  // Run tests
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying to staging environment..."'
            }
        }
    }
}
