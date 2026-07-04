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

        stage('Clean Previous Results') {
            steps {
                sh 'rm -rf allure-results allure-report playwright-report test-results'
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

            sh '''
            mkdir -p allure-results
            echo "Environment=QA" > allure-results/environment.properties
            echo "Framework=Playwright" >> allure-results/environment.properties
            echo "Language=TypeScript" >> allure-results/environment.properties
            echo "CI=Jenkins" >> allure-results/environment.properties
            echo "BaseURL=$BASE_URL" >> allure-results/environment.properties
            '''

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