node {
    try {
        withEnv(["PATH+NODE=${tool name: 'JenkinsNode'}/bin"]) {
            if (release == "deploy") {
                checkout()
                build()
                tests()
                reports()
                documentation()
                sonar()
            }
            else // tests only
             {
                tests()
                reports()
            }
        }
    } catch (e) {
        result = "FAIL" // make sure other exceptions are recorded as failure too
    }

}

def checkout() {
    stage 'checkout'
        deleteDir()
        checkout scm
}

def build() {
    stage 'build'
        sh 'node -v && npm -v && npm install'
}

def tests() {
    stage 'tests'
        try {
            sh 'npm run "e2e-test"'
        } catch (Exception err) {
            exit = 0
        }
}

def reports() {
    stage 'reports'
        sh 'npm run "e2e-report"'
        cucumber fileIncludePattern: 'cucumberReport/cucumber.json', sortingMethod: 'ALPHABETICAL'
}

def documentation() {
    stage 'runTraceability'
        sh """#!/bin/bash -l
           rvm use ruby-2.2.3
           ruby getFeatureResults.rb
        """
   stage 'release docs'
        sh 'mkdir -p releaseRecords/build_number_${BUILD_ID}'
        sh 'mkdir -p releaseRecords/build_number_${BUILD_ID}/unitTestReport/'
        sh 'mkdir -p releaseRecords/build_number_${BUILD_ID}/traceability/'
        sh 'mv cucumberReport releaseRecords/build_number_${BUILD_ID}'
        sh 'mv manualTests releaseRecords/build_number_${BUILD_ID}'
        sh 'zip -r releaseRecords releaseRecords'
    stage 'archive'
        archiveArtifacts 'releaseRecords.zip'
}

def sonar() {
  stage('SonarQube analysis') {
    // requires SonarQube Scanner 6.7+
    def scannerHome = tool 'SonarQube Scanner 6.7';
    withSonarQubeEnv('My SonarQube Server') {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }

}


