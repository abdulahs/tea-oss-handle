class TeaOSSHandle {
    constructor(projectName) {
      this.projectName = projectName;
      this.contributors = [];
      this.isPublic = true;
    }
  
    addContributor(contributor) {
      this.contributors.push(contributor);
    }
  
    removeContributor(contributor) {
      const index = this.contributors.indexOf(contributor);
      if (index !== -1) {
        this.contributors.splice(index, 1);
        console.log(`Removed ${contributor} from the contributors of the ${this.projectName} project.`);
      } else {
        console.log(`${contributor} is not a contributor to the ${this.projectName} project.`);
      }
    }
  
    makeProjectPublic() {
      this.isPublic = true;
      console.log(`The ${this.projectName} project is now public and open for contributions.`);
    }
  
    makeProjectPrivate() {
      this.isPublic = false;
      console.log(`The ${this.projectName} project is now private and closed for contributions.`);
    }
  
    displayProjectInfo() {
      console.log(`Project Name: ${this.projectName}`);
      console.log(`Public Status: ${this.isPublic ? 'Public' : 'Private'}`);
      console.log('Contributors:', this.contributors.join(', '));
    }
  }
  
  // Example usage:
  const teaOSSHandle = new TeaOSSHandle('Tea-Blend');
  teaOSSHandle.addContributor('Alice');
  teaOSSHandle.addContributor('Bob');
  teaOSSHandle.displayProjectInfo();
  teaOSSHandle.makeProjectPrivate();
  teaOSSHandle.removeContributor('Charlie');
  