(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{390:function(t,a,s){"use strict";s.r(a);var e=s(34),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"config-file-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-file-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Config File Description")]),t._v(" "),s("p",[t._v("Imunify360 config file is available on the following location after installation:")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("em",[t._v("/etc/sysconfig/imunify360/imunify360.config")])])]),t._v(" "),s("p",[t._v("In the config file it is possible to set up Imunify360 configuration. The following options are available:")]),t._v(" "),s("table",[s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("AUTO_WHITELIST:")])])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("timeout: 1440")])]),s("td",[t._v("# set in minutes how long to keep automatically whitelisted IP")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("after_unblock_timeout: 1440")])]),s("td",[t._v("\n# set in minutes for how long IP will be added to the "),s("span",{staticClass:"notranslate"},[t._v("White List")]),t._v(" after it passes Imunify360 CAPTCHA")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("DOS:")])])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("enabled: True")])]),s("td",[t._v("# allows to enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(", the default value) or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") DOS detection")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("interval: 30")])]),s("td",[t._v("# interval in seconds between DoS detection system activation")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("default_limit: 250")])]),s("td",[t._v("# maximum default limit of connections from remote IP to local port before DoS protection will be triggered. Cannot be set lower than 100")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("port_limits:")])]),s("td",[t._v("# allows to set limits per local port")])]),t._v(" "),s("tr",[s("td",[t._v("80: 150\n")]),s("td",[t._v("# limit on port 80 is set to 150 connections")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("FIREWALL:")])])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("port_blocking_mode: ALLOW")])]),s("td",[t._v("# allows to set firewall port blocking mode."),s("br"),s("br"),t._v(" "),s("b",[t._v("ALLOW (default)")]),t._v(" - allow all except specified."),s("br"),t._v(" "),s("b",[t._v("DENY")]),t._v(" - block all except specified."),s("br"),s("br"),t._v("\nExact ports and port-ranges to be allowed can be configured by the following fields in the config file:"),s("br"),t._v("\n- FIREWALL.TCP_IN_IPv4"),s("br"),t._v("\n- FIREWALL.TCP_OUT_IPv4"),s("br"),t._v("\n- FIREWALL.UDP_IN_IPv4"),s("br"),t._v("\n- FIREWALL.UDP_OUT_IPv4"),s("br"),s("br"),t._v("\nChanges of config files will be applied automatically. You don’t need to restart the server or Imunify360."),s("br"),s("br"),t._v(" "),s("em",[s("b",[t._v("Please note, the feature doesn’t support IPv6 addresses at this moment and CSF needs to be disabled due to conflicts.")])])])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("INCIDENT_LOGGING:")])])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("min_log_level: 4")])]),s("td",[t._v("# minimum severity level for incidents displayed in UI. Please find the levels description "),s("a",{attrs:{href:"/dashboard/#incidents-logging"}},[t._v("here")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("num_days: 100")])]),s("td",[t._v("# incidents older than "),s("span",{staticClass:"notranslate"},[s("em",[t._v("num_days")])]),t._v(" are automatically deleted")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("limit: 100000")])]),s("td",[t._v("# how many incidents should be stored in Imunify360 log file")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("ui_autorefresh_timeout: 10")])]),s("td",[t._v("# set auto refresh time for incidents in user interface")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("LOGGER:")])])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("max_log_file_size: 62914560")])]),s("td",[t._v("# defines the maximum size of the log file in bytes (default is 60 MB)")])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("backup_count: 5")])]),s("td",[t._v("# defines how many log files to store. If 5, it will store "),s("span",{staticClass:"notranslate"},[s("em",[t._v("app.log")]),t._v(", "),s("em",[t._v("app.log.1")])]),t._v(", and up to "),s("span",{staticClass:"notranslate"},[s("em",[t._v("app.log.5")])]),t._v(".")])]),t._v(" "),s("tr",[s("th",{attrs:{align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("MOD_SEC:")])]),t._v(" "),s("th",{attrs:{align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("# defines ModSecurity settings")])])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("ruleset: FULL")])]),s("td",[t._v("# defines what ruleset to use: "),s("span",{staticClass:"notranslate"},[t._v("FULL")]),t._v(" (default value) or "),s("span",{staticClass:"notranslate"},[t._v("MINIMAL")]),t._v(". If the amount of RAM on the server is less than 2.1GB, the ruleset value is automatically set to "),s("span",{staticClass:"notranslate"},[t._v("MINIMAL")]),t._v(".")])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("cms_account_compromise_prevention: False")])]),s("td",[t._v("# enables WordPress account brute-force protection. Default is "),s("b",[t._v("False")]),t._v(".")])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("app_specific_ruleset: True")])]),s("td",[t._v("# enables WAF Rules Auto-Configurator. Default is "),s("b",[t._v("True")]),t._v(".")])]),t._v(" "),s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("prev_settings: ")])]),s("td",[t._v("# for internal usage, do not edit")]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("MOD_SEC_BLOCK_BY_SEVERITY:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable: True")])]),s("td",[t._v("# allows to enable or disable option that moves IPs to "),s("span",{staticClass:"notranslate"},[t._v("Gray List")]),t._v(" if the ModSecurity rule is triggered")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_incidents: 2")])]),s("td",[t._v("# set a number of repeats of the ModSecurity incident from the same IP for adding it to "),s("span",{staticClass:"notranslate"},[t._v("Gray List")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("denied_num_limit: 2")])]),t._v(" "),s("td",[t._v("# set a number of repeats of the ModSecurity incidents that got Access Denied error from the same IP for adding it to "),s("span",{staticClass:"notranslate"},[t._v("Gray List")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("check_period: 120")])]),t._v(" "),s("td",[t._v("# set a period in seconds during which incident from the same IP will be recorded as a repeat")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("severity_limit: 2")])]),t._v(" "),s("td",[t._v("# set a level of severity for DOS detection sensitivity. "),s("a",{attrs:{href:"/dashboard/#settings"}},[t._v("Read more")]),t._v(" about severity levels")])]),t._v(" "),s("tr",[s("th",{attrs:{align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("MOD_SEC_BLOCK_BY_CUSTOM_RULE:")])]),s("th",{attrs:{align:"left"}},[t._v("# this section allows to add custom configuration for blocking by ModSecurity incidents")])]),t._v(" "),s("tr",[s("td",[t._v("33332:")]),t._v(" "),s("td",[t._v("# set ModSecurity rule ID")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("check_period: 120")])]),t._v(" "),s("td",[t._v("# set a period in seconds during which incident from the same IP will be recorded as a repeat")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_incidents: 10")])]),t._v(" "),s("td",[t._v("# set a number of repeats of the ModSecurity incident from the same IP for adding it to "),s("span",{staticClass:"notranslate"},[t._v("Gray List")])])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("MALWARE_SCANNING:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("try_restore_from_backup_first: False")])]),t._v(" "),s("td",[t._v("# allows to enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(" – the default value) automatic malicious file restore from backup if a clean copy exists,\notherwise "),s("span",{staticClass:"notranslate"},[s("em",[t._v("default_action")])]),t._v(" is applied")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("default_action: cleanup")])]),t._v(" "),s("td",[t._v("# default action on malicious file detected."),s("br"),t._v("\nAvailable options:\n"),s("ul",[s("li",[s("span",{staticClass:"notranslate"},[s("b",[t._v("notify")])]),t._v(" – just display in dashboard")]),t._v(" "),s("li",[s("span",{staticClass:"notranslate"},[s("b",[t._v("cleanup")])]),t._v(" – cleanup malicious file (default)")]),t._v(" "),s("li",[s("span",{staticClass:"notranslate"},[t._v("quarantine")]),t._v(" – do not delete and move to quarantine (available only via CLI)")]),t._v(" "),s("li",[s("span",{staticClass:"notranslate"},[t._v("delete")]),t._v(" – delete malicious file (available only via CLI)")]),t._v(" "),s("li",[s("span",{staticClass:"notranslate"},[t._v("cleanup_or_quarantine")]),t._v(" choose what to do with a malicious file (available only via CLI)")])])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable_scan_inotify: True")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(" (default)) or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") real-time scanning for modified files using "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Inotify",target:"_blank"}},[t._v("inotify")]),t._v(" library")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable_scan_pure_ftpd: True")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(" (default)) or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") real-time scanning for files uploaded through PureFTPd")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable_scan_modsec: True")])]),t._v(" "),s("td",[t._v("#  enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(" (default) or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") real-time scanning of all the files\nthat were uploaded via http/https. Note that it requires "),s("a",{attrs:{href:"https://modsecurity.org",target:"_blank"}},[t._v("ModSecurity")]),t._v(" to be installed")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_signature_size_to_scan: 1048576")])]),t._v(" "),s("td",[t._v("# max file size to scan in the standard mode; value is set in bytes")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_cloudscan_size_to_scan: 10485760")])]),t._v(" "),s("td",[t._v("# max file size to scan in the cloud-assisted (by hashes) mode; value is set in bytes")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_mrs_upload_file: 10485760")])]),t._v(" "),s("td",[t._v("# max file size to upload to CloudLinux malware research service; value is set in bytes")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("detect_elf: True")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") (default value) or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") binary (ELF) malware detection")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("notify_on_detect: False")])]),t._v(" "),s("td",[t._v("# notify ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") or not ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") (default value) an admin when malware is detected")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("optimize_realtime_scan: True")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") (default value) or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") the  "),s("a",{attrs:{href:"https://docs.cloudlinux.com/cloudlinux_os_kernel/#file-change-api",target:"_blank"}},[t._v("File Change API")]),t._v(" support to reduce the system load while watching for file changes in comparison with inotify watch")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("sends_file_for_analysis: True")])]),t._v(" "),s("td",[t._v("# send ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") (default value) or not ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") malicious and suspicious files to the Imunify team for analysis")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("i360_clamd: False")])]),t._v(" "),s("td",[t._v("# obsolete (not used)")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("show_clamav_results: False")])]),t._v(" "),s("td",[t._v("# obsolete (not used)")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("clamav_binary: True")])]),t._v(" "),s("td",[t._v("# obsolete (not used)")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("scan_modified_files: True")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") (default value) or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") real-time scanning for modified files using inotify library. The Scanner searches for modified files in user’s DocumentRoot directories.")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("cloud_assisted_scan: True")])]),t._v(" "),s("td",[t._v("# speed up scans by check file hashes using cloud database")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("rapid_scan: True")])]),t._v(" "),s("td",[t._v("# speeds up ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") (default value) ot not ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") repeated scans based on smart re-scan approach, local result caching and cloud-assisted scan.")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("CAPTCHA:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("cert_refresh_timeout: 3600")])]),t._v(" "),s("td",[t._v("# set in seconds how often SSL certificate will be refreshed")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("ERROR_REPORTING:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable: True")])]),t._v(" "),s("td",[t._v("# automatically report errors to imunify360 team")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("SEND_ADDITIONAL_DATA:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable: True")])]),t._v(" "),s("td",[t._v("# send anonymized data from query string/post parameters and cookies. True is the default value.")])]),t._v(" "),s("tr",[s("th",{attrs:{align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("NETWORK_INTERFACE:")])]),t._v(" "),s("th",{attrs:{aligh:"left"}},[t._v("# manages for what network interfaces Imunify360 rules will be applied")])]),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("eth_device: None")])]),t._v(" "),s("td",[t._v("# by default, Imunify360 will auto-configure iptables to filter all traffic. \nIf you want iptables rules to be applied to a specific NIC only, list them here (e.g. "),s("span",{staticClass:"notranslate"},[t._v("eth1")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("eth6_device: None")])]),t._v(" "),s("td",[t._v("# it is the same as "),s("span",{staticClass:"notranslate"},[s("em",[t._v("eth_device")])]),t._v(", but configures ip6tables to use specific device")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("eth_device_skip: []")])]),t._v(" "),s("td",[t._v("# if you don't want iptables\\ip6tables rules to be applied to specific NICs, list them here (e.g "),s("span",{staticClass:"notranslate"},[t._v("[eth1, eth2]")]),t._v(")")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("BACKUP_RESTORE:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_days_in_backup: 90")])]),t._v(" "),s("td",[t._v("# restore from backup files that are not older than "),s("span",{staticClass:"notranslate"},[s("em",[t._v("max_days_in_backup")])])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("cl_backup_allowed: True")])]),t._v(" "),s("td",[t._v("# show "),s("span",{staticClass:"notranslate"},[t._v("CloudLinux Backup")]),t._v(" in the list of available backup system ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(" (default)) or hide it ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("cl_on_premise_backup_allowed: False")])]),t._v(" "),s("td",[t._v("# do not allow CloudLinux backup ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(" (default)) or allow it ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(")")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("CAPTCHA_DOS:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enabled: True")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(" (default) or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") CAPTCHA Dos protection")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("time_frame: 21600")])]),t._v(" "),s("td",[t._v("# set a period in seconds during which requests to CAPTCHA from the same IP\nwill be recorded as repeated")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_count: 100")])]),t._v(" "),s("td",[t._v("# set the maximum number of repeated CAPTCHA requests after which IP is moved\nto the CAPTCHA Dos list without an ability to request CAPTCHA again")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("timeout: 864000")])]),t._v(" "),s("td",[t._v("# set in seconds the time on which to add the IP in CAPTCHA Dos list without an ability\nto request CAPTCHA again")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("BLOCKED_PORTS:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("default_mode: allowed")])]),t._v(" "),s("td",[t._v("# defines the default state of ports which is not explicitly set by user ("),s("span",{staticClass:"notranslate"},[s("em",[t._v("denied")])]),t._v(" by default or "),s("span",{staticClass:"notranslate"},[s("em",[t._v("allowed")])]),t._v(" by default). Currently only "),s("span",{staticClass:"notranslate"},[s("em",[t._v("allowed")])]),t._v(" is supported")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("WEBSHIELD:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("known_proxies_support: True")])]),t._v(" "),s("td",[t._v("# enable CDN support, treat IPs behind CDN as any other IPs. (True is the default value).")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable: True")])]),t._v(" "),s("td",[t._v("# enable (True) (default value) or disable (False) WebShield")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v('captcha_site_key: ""')])]),t._v(" "),s("td",[t._v("# your site key; required to show reCAPTCHA on the page")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v('captcha_secret_key: ""')])]),t._v(" "),s("td",[t._v("# your secret key; required for communication between Google server and this server to get reCAPTCHA pass results")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("PROACTIVE_DEFENCE:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("blamer: True")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(" (default)) or disable ("),s("span",{staticClass:"notranslate"},[t._v("False) Blamer")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("mode: LOG")])]),t._v(" "),s("td",[t._v("# available modes:"),s("ul",[s("li",[s("span",{staticClass:"notranslate"},[t._v("KILL")])]),s("li",[s("span",{staticClass:"notranslate"},[t._v("DISABLED")])]),s("li",[s("span",{staticClass:"notranslate"},[t._v("LOG")]),t._v(" (default)")])])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("php_immunity: False")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("False (default)) PHP Immunity ")]),t._v(" (allows to automatically detect & patch vulnerabilities in software at the Proactive Defense level preventing re-infections through the same vulnerability). By enabling this feature, Blamer will be enabled as well and Proactive Defence switched into the KILL mode.")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("MALWARE_SCAN_INTENSITY:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("cpu: 2")])]),t._v(" "),s("td",[t._v("# intensity level for CPU consumption. Can be set from 1 to 7, default is 2")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("io: 2")])]),t._v(" "),s("td",[t._v("# intensity level for file operations. Can be set from 1 to 7, default is 2")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("ram: 2048")])]),t._v(" "),s("td",[t._v("# intensity level for RAM consumption. Minimum value is 1024, default is 2048")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("MALWARE_SCAN_SCHEDULE:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("day_of_month: <next day after installation>")])]),t._v(" "),s("td",[t._v("# when the background scan shall start, day of the month. Can be from 1 to 31, the default value is the <next day after installation>.")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("day_of_week: 0")])]),t._v(" "),s("td",[t._v("# when the background scan shall start, day of the week. Can be from 0 to 7 (0 for Sunday, 1 for Monday..., 7 for Sunday (again)), the default value is 0")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("hour: 3")])]),t._v(" "),s("td",[t._v("# when the background scan shall start, hour. Can be from 0 to 23, the default value is 3")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("interval: MONTH")])]),t._v(" "),s("td",[t._v("# interval of scan. Supported values: strings "),s("span",{staticClass:"notranslate"},[t._v("`NONE`")]),t._v(" (no scan), "),s("span",{staticClass:"notranslate"},[t._v("`DAY`")]),t._v(", "),s("span",{staticClass:"notranslate"},[t._v("`WEEK`")]),t._v(", "),s("span",{staticClass:"notranslate"},[t._v("`MONTH`")]),t._v(", the default value is "),s("span",{staticClass:"notranslate"},[t._v("`MONTH`")])])]),t._v(" "),s("tr",[s("th",{attrs:{align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("PAM:")])]),t._v(" "),s("th",{attrs:{align:"left"}},[t._v("# effective way to prevent brute-force attacks against FTP/SSH")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable: False")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") (default value) PAM brute-force attack protection")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("PAM.exim_dovecot_protection: False")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") (default value) Exim+Dovecot brute-force attack protection against Dovecot brute-force attacks.")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("PAM.ftp_protection: False")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") (default value) FTP brute-force attack protection.")])]),t._v(" "),s("tr",[s("th",{attrs:{align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("KERNELCARE:")])]),t._v(" "),s("th",{attrs:{align:"left"}},[t._v("# KernelCare extension for Imunify360 which allows tracing malicious invocations to detect privilege escalation attempts")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("edf: False")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") (default value) exploit detection framework")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("MALWARE_CLEANUP:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("trim_file_instead_of_removal: True")])]),t._v(" "),s("td",[t._v("# do not remove infected file during cleanup but make the file zero-size (for malwares like web-shells) ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") (default value)")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("keep_original_files_days: 14")])]),t._v(" "),s("td",[t._v("# the original infected file is available for restore within the defined period. The default is 14 days. The minimum value is one day.")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("OSSEC:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("active_response: False")])]),t._v(" "),s("td",[t._v("# block ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") access to a specific server port being attacked. The default value is "),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(".")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("ADMIN_CONTACTS:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("emails: youremail@email.com")])]),t._v(" "),s("td",[t._v("# your email to receive reports about critical issues, security alerts or system misconfigurations detected on your servers.")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("SMTP_BLOCKING:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable: False")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") (default value) SMTP Traffic Management. When enabled, the outgoing SMTP traffic would be blocked according to the settings.")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("ports: 25,587,465")])]),t._v(" "),s("td",[t._v("# a list of the ports to be blocked. The defaults are: 25, 587,465.")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("allow_users:")])]),t._v(" "),s("td",[t._v("# a list of users to be ignored (not blocked). By default it is empty. Including Unix and cPanel users (if a process that sends an email has a UID of one of the `allow_users`, it will not be blocked).")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("allow_groups: mail")])]),t._v(" "),s("td",[t._v("# a list of the groups to be ignored (not blocked). By default it is empty. Including Unix and cPanel users (if a process that sends an email has a UID of one of the `allow_users`, it will not be blocked).")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("allow_local: False")])]),t._v(" "),s("td",[t._v("# block ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") all, except the local SMTP (localhost). "),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(" is the default value.")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("redirect: False")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") (the default value) automatic redirection to the local ports for outgoing mail traffic.")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("CSF_INTEGRATION:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("catch_lfd_events: False")])]),t._v(" "),s("td",[t._v("# let ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") Imunify360 use Login Failure Daemon (LFD) as a source for security events. Default is False.")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("PERMISSIONS:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("support_form: True")])]),t._v(" "),s("td",[t._v("# show ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") (the default value) or hide ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") the Support icon in the Imunify360 UI.")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("user_ignore_list: True")])]),t._v(" "),s("td",[t._v("# show ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") (the default value) or hide ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") the Ignore List tab for end-users in the Imunify360 UI.")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("allow_malware_scan: False")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") (the default value) “scan” action in the UI of the end-user.")])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("advisor: True")])]),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("True")]),t._v(" - the default value) or disable ("),s("span",{staticClass:"notranslate"},[t._v("False")]),t._v(") the Imunify Advisor.")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("STOP_MANAGING:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("modsec_directives: False")])]),t._v(" "),s("td",[t._v("# for internal usage, do not edit")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("WEB_SERVICES:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("http_ports: ")])]),t._v(" "),s("td",[t._v("# additional http ports for Captcha")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("https_ports: ")])]),t._v(" "),s("td",[t._v("# additional https ports for Captcha")])])]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v("Active Response")]),t._v(" is an ossec-driven (IDS) feature of Imunify360 which has been re-engineered to make it capable of blocking access to a specific server port being attacked.")]),t._v(" "),s("p",[t._v("The purpose of the feature is significantly reducing false positive rate while increasing its capabilities to detect and block aggressive brute force requests.")]),t._v(" "),s("p",[t._v("In order to activate "),s("span",{staticClass:"notranslate"},[t._v("Active Response, ")]),t._v("the following lines should be added into "),s("span",{staticClass:"notranslate"},[s("em",[t._v("/etc/sysconfig/imunify360/imunify360.config")])]),t._v(":\n")]),s("div",{staticClass:"notranslate"},[s("p"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("OSSEC:\n  active_response: True\n")])])])]),t._v("\nand then restart Imunify360 service:\n"),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl restart imunify360\n")])])])]),t._v(" "),s("h3",{attrs:{id:"how-to-apply-changes-from-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-apply-changes-from-cli","aria-hidden":"true"}},[t._v("#")]),t._v(" How to apply changes from CLI")]),t._v(" "),s("p",[t._v("In order to apply changes via command-line interface (CLI), you can use the following command:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('imunify360-agent config update \'{"SECTION": {"parameter": value}}\'\n')])])])]),t._v(" "),s("p",[t._v("For example, if you want to set "),s("span",{staticClass:"notranslate"},[s("code",[t._v("MALWARE_SCAN_INTENSITY.cpu = 5")])]),t._v(" from a command line, then you should execute the following command:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('imunify360-agent config update \'{"MALWARE_SCAN_INTENSITY": {"cpu": 5}}\'\n')])])])]),t._v(" "),s("p",[t._v("It is also possible to apply several parameters at once. For example:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('imunify360-agent config update \'{"PAM": {"exim_dovecot_protection": false, "enable":true}}\'\n')])])])])])},[],!1,null,null,null);a.default=n.exports}}]);