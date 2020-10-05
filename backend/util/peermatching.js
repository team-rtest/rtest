export function matchpeer(questions, students, numTask) {
  shuffle(questions);
  shuffle(students);
  var len = questions.length;
  var array = new Array();
  for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < len; j++) {
      array[i] = new Array();
      array.push(questions[(j + numTask * (1 + i)) % len]);
    }
  }
  return array;
}

export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// I tried to rework your implementation a bit, hopefully this is helpful
// It's kind of garbage in terms of performance but hopefully the tests can be
// Leveraged to improve the implementation
export function matchpeer2(students, numTasks) {
  var d = Object();
  for (let student of students) {
    d[student] = new Set();
    let i = 0;
    while (i < numTasks) {
      let random_student =
        students[Math.floor(Math.random() * students.length)];
      if (!(random_student === student) && !d[student].has(random_student)) {
        d[student].add(random_student);
        i++;
      }
    }
  }

  return d;
}
