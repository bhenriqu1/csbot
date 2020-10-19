module.exports = {
    name: 'opportunities',
    description: "opportunities temporary command for mockup",
    execute(message, args) {
      const op1 = {
        name: 'Software Engineer Intern/Co-op (Herndon, VA)',
        link: 'https://www.indeed.com/viewjob?jk=74f53be4da1ae301&from=serp&vjs=3'
      }
      const op2 = {
        name: 'Software Development Engineer Intern (Summer 2021)',
        link: 'https://www.indeed.com/viewjob?jk=109dd74e9e018229&from=serp&vjs=3'
      }
      message.channel.send({
        embed: {
          title: "New Career Opportunities!",
          description: "Last updated: " + new Date().toLocaleString(),
          fields: [{
            name: op1.name,
            value: op1.link
          },
          {
            name: op2.name,
            value: op2.link
          }],
        }
      });
    }
  }