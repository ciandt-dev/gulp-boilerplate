'use strict';

var engines = {
    node : process.env.npm_package_engines_node || undefined,
    npm : process.env.npm_package_engines_npm || undefined
};

var localEnv = {
  node : process.env.npm_config_user_agent.match(/node[//a-z_0-9_.]+/g) || undefined,
  npm : process.env.npm_config_user_agent.match(/npm[//a-z_0-9_.]+/g) || undefined,
};

var check_version = (function(engines, localEnv, undefined) {
  var _engines;
  var _localEnv;
	var callBack = function(elementVersion, version) {
		var npm;
		var node;

		switch (elementVersion) {
			case 'node': {
				node = version.replace(/([^0-9.]|\r\n|\n|\r)/gm,"");
				console.log('- Current Version node: ' + node + ' => Version recomended ' + ((_engines[elementVersion]) ? _engines[elementVersion] : '' ));
				testVersion(elementVersion, node);
				break;
			}
			case 'npm' : {
				npm = version.replace(/([^0-9.]|\r\n|\n|\r)/gm,"");
				console.log('- Current Version npm: ' + npm + ' => Version recomended ' + ((_engines[elementVersion]) ?  _engines[elementVersion] : '' ));
				testVersion(elementVersion, npm);
				break;
			}
			default: process.exit(0);
		}
	};

	var testVersion = function(elementVersion,version) {
		if (version < _engines[elementVersion].replace(/([^0-9.]|\r\n|\n|\r)/gm,"")) {
			process.exit(1);
		}
	};

  return {
    init: function() {
  		_engines = engines || undefined;
      _localEnv = localEnv || undefined;

      //Exit if not get version from system or package json
      if( !_engines || !_localEnv )
        process.exit(8);

      //Remove v4.*.*
      callBack('node', _localEnv.node.toString() );
      callBack('npm', _localEnv.npm.toString() );

      //test success
      process.exit(0);
  	},
  };
})(engines, localEnv, undefined);

process.on('exit', function(code) {
  switch (code) {
    case 0 : console.log('\nTest Succcess!!! All requirements are ok and you can run npm install now.'); break;
    case 1 : console.log('\nPlease confirm above requirements'); break;
    default: return;
  }
});

check_version.init();
