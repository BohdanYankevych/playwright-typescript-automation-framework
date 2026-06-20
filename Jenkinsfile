pipeline {
    agent any

    parameters {
        choice(
            name: 'TEST_SUITE',
            choices: ['api', 'smoke', 'regression', 'all'],
            description: 'Choose which test suite to run'
        )
    }

    environment {
        PATH = "/Users/bohdanyankevych/.nvm/versions/node/v25.2.1/bin:${env.PATH}"
        BASE_URL = "https://www.saucedemo.com/"
        USERNAME = "standard_user"
        PASSWORD = "secret_sauce"
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

        stage('Run Tests') {
            steps {
                script {
                    if (params.TEST_SUITE == 'all') {
                        sh 'npx playwright test'
                    } else {
                        sh "npx playwright test --grep @${params.TEST_SUITE}"
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'allure-results/**/*', allowEmptyArchive: true

            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
        }
    }
}