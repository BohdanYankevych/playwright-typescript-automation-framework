pipeline {
    agent any

    environment {
        PATH = "/Users/bohdanyankevych/.nvm/versions/node/v25.2.1/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/BohdanYankevych/playwright-typescript-automation-framework.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run API Tests') {
            steps {
                sh 'npx playwright test --grep @api'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'allure-results/**/*', allowEmptyArchive: true
        }
    }
}