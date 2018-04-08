
require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'features/step_definitions',
        '--format', 'json:cucumberReport/cucumber.json',
        'features'
    ]
});

module.exports = {
    custom_assertions_path: 'custom_asserts',
    custom_commands_path: 'custom_commands',
    output_folder: 'reports',
    page_objects_path: 'pages',
    live_output: false,
    disable_colors: false,
    selenium: {
        server_path: './bin/selenium-server-standalone-3.0.1.jar',
        log_path: ''
    },
    test_settings: {
        default: {
            selenium_start_process: false,
            selenium_port: 4723,
            selenium_host: "localhost",
            launch_url: "127.0.0.1",
            silent: true,
            screenshots: {
                enabled: false,
                path: "",
                on_failure: true,
                on_error: true},
            desiredCapabilities: {
            }
        },
        ios: {
            automationName: "XCUITest",
            desiredCapabilities: {
                browserName: "Safari",
                platformName: "iOS",
                platformVersion: "11.2",
                deviceName: "iPad Pro (9.7-inch)"
            }
        }
    }
};



