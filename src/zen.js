var Zen = {
    selector: 'list_holder',
    get isActive () { return !!location.hash.match(/%26zen$/) },
    hide: function () {
        document.getElementById(this.selector).style.visibility = 'hidden';
        if (!Zen.isActive) { location.hash = location.hash += '%26zen'; }
    },
    show: function () {
        document.getElementById(this.selector).style.visibility = 'visible';
        if (Zen.isActive) {
            location.hash = location.hash.replace(/%26zen$/g, '');
        }
    },
    createButton: function () {
        var anchor = document.createElement('A');
        anchor.setAttribute('href', '#');
        anchor.setAttribute('id', 'todoist-zen-toggle');
        anchor.style.position = 'absolute';
        anchor.style.right = 0;
        anchor.style.fontSize = 'x-large';
        anchor.style.textDecoration = "none";
        anchor.textContent = (this.isActive) ? '+' : '-';
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (Zen.isActive) {
                Zen.show();
                document.getElementById('todoist-zen-toggle').textContent = '-';
            } else {
                Zen.hide();
                document.getElementById('todoist-zen-toggle').textContent = '+';
            }
        });
        document.getElementById('td_logo').appendChild(anchor);
    },
    init: function () {
        if (this.isActive) {
            setTimeout(function () {
                location.hash.replace(/%26zen$/g, '');
                location.hash += '%26zen';
            }, 500);
            Zen.hide();
        }
        this.createButton();
    }
};
Zen.init();
