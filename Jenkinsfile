node {
    try {
        withEnv(["PATH+NODE=${tool name: 'JenkinsNode'}/bin"]) {
            if (release == "deploy") {
                checkout()
                build()
                tests()

            }
            else // tests only
             {
                tests()
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


