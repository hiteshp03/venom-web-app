pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'mvn clean package'  // Example for a Maven project
            }
        }
        stage('Test') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        echo 'Running unit tests...'
                        sh 'mvn test'  // Run unit tests
                    }
                }
                stage('Integration Tests') {
                    steps {
                        echo 'Running integration tests...'
                        sh 'mvn verify -Pintegration-tests'  // Run integration tests
                    }
                }
                stage('Linting') {
                    steps {
                        echo 'Running linting...'
                        sh 'npm run lint'  // Example for a Node.js project
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh 'echo "Deploying to staging environment..."'
            }
        }
    }
}
