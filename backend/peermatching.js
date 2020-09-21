function matchpeer(questions, students, numTask) {
    shuffle(questions);
    shuffle(students);
    var len = questions.length;
    for (var i=0; i < students.length; i++) {
        for ( var j=0; j < len; j++) {
            addPeer(questions[(j + i)%len],students[i]);
        }
    }
}

function addPeer(question, student) {
    return;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
