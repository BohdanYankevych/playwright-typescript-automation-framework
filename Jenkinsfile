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
        BASE_URL = 'https://www.saucedemo.com/'
        USERNAME = 'standard_user'
        PASSWORD = 'secret_sauce'
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

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run ESLint') {
            steps {
                sh 'npm run lint'
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
            sh '''
                mkdir -p allure-results

                echo "Environment=QA" > allure-results/environment.properties
                echo "Framework=Playwright" >> allure-results/environment.properties
                echo "Language=TypeScript" >> allure-results/environment.properties
                echo "CI=Jenkins" >> allure-results/environment.properties
                echo "BaseURL=$BASE_URL" >> allure-results/environment.properties
            '''

            archiveArtifacts(
                artifacts: 'playwright-report/**/*',
                allowEmptyArchive: true
            )

            archiveArtifacts(
                artifacts: 'allure-results/**/*',
                allowEmptyArchive: true
            )

            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
        }

        success {
            echo 'Playwright pipeline completed successfully.'
        }

        failure {
            echo 'Playwright pipeline failed. Check the test reports and console output.'
        }

        cleanup {
            deleteDir()
        }
    }
}