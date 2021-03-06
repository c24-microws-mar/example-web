import $ from 'jquery';
import agent from 'multiagent';
import greeter from './greeter';

const DISCOVERY_SERVERS = [
  'http://46.101.245.190:8500',
  'http://46.101.132.55:8500',
  'http://46.101.193.82:8500'
];

const client = agent.client({
  discovery: 'consul',
  discoveryServers: DISCOVERY_SERVERS,
  discoveryStrategy: 'randomly',
  serviceName: 'example-service',
  serviceStrategy: 'randomly'
});

client.get('/superstars').end(function (err, res) {
  if (res.body && res.body.length)
    res.body.forEach(superstar => $('<p></p>').text(superstar).appendTo('body'));
});

const greeting = greeter.greet('World');
$('<p></p>').text(greeting).appendTo('body');
