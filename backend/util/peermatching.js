export default {
  matchpeer: (questions, students, numTask) => {
    shuffle(questions);
    shuffle(students);
    var len = questions.length;
    var array = new Array ();
    for (var i = 0; i < students.length; i++) {
      for (var j = 0; j < len; j++) {
        array[i] = new array ();
        array.push(questions[(j +numTask*(1+i))%len]);
      }
    }
    return array;
  },

  shuffle: (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },
};
