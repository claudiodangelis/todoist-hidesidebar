var Zen = {
    selector: 'list_holder',
    get isActive () { return !!location.hash.match(/%26zen$/) },
    hide: function () {
        document.getElementById(this.selector).style.visibility = 'hidden';
        if (!Zen.isActive) { location.hash = location.hash += '%26zen'; }
    },
    show: function () {
        document.getElementById(this.selector).style.visibility = 'visible';
        location.hash = location.hash.replace(/%26zen$/g, '');
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
            } else {
                Zen.hide();
            }
            document.getElementById('todoist-zen-toggle').textContent = (
                Zen.isActive ? '-' : '+'
            );
        });
        document.getElementById('td_logo').appendChild(anchor);
    },
    init: function () {
        if (this.isActive) { Zen.hide(); }
        this.createButton();
    }
};
Zen.init();
