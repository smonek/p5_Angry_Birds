class SlingShot {
  constructor(x, y, body) {
    const options = {
      // umisteni slingshotu a jeho vytvarovani
      pointA: {
        x: x,
        y: y
      },
      bodyB: body,
      stiffness: 0.02,
      length: 40
    };
    // dalsi pridani fyzikalnich jevu
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    this.sling.bodyB = null;
  }

  show() {
    if (this.sling.bodyB) {
      stroke(0);
      strokeWeight(4);
      const posA = this.sling.pointA;
      const posB = this.sling.bodyB.position;
      line(posA.x, posA.y, posB.x, posB.y);
    }
  }

  //pripnuti koule na slingshot
  attach(body) {
    this.sling.bodyB = body;
  }
}