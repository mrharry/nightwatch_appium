pipeline {
  agent any
  stage('Initialize') {
          echo 'Initializing...'
          def node = tool name: 'Node-7.4.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
          env.PATH = "${node}/bin:${env.PATH}"
      }
  stages {
    stage('checkout') {
      steps {
        echo 'hello'
      }
    }
    stage('E2E-TEST') {
      steps {
        sh 'npm -v'
      }
    }
    stage('error') {
      steps {
        cucumber 'cucumber*'
      }
    }
    stage('End') {
      steps {
        echo 'end of the pipeline'
      }
    }
  }
}
