pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    parameters {
        choice(
            name: 'TEST_SUITE',
            choices: ['api', 'smoke', 'regression', 'all'],
            description: 'Choose which test suite to run'
        )
    }

    environment {
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

                cat > allure-results/environment.properties <<EOF
Environment=QA
Framework=Playwright
Language=TypeScript
CI=Jenkins
BaseURL=$BASE_URL
EOF
            '''

            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
        }

        cleanup {
            deleteDir()
        }
    }
}