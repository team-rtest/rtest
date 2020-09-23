export default {
  matchpeer: (questions, students, numTask) => {
    shuffle(questions);
    shuffle(students);
    var len = questions.length;
    for (var i = 0; i < students.length; i++) {
      for (var j = 0; j < len; j++) {
        addPeer(questions[(j + i) % len], students[i]);
      }
    }
  },

  addPeer: (question, student) => {
    return;
  },

  shuffle: (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },
};
