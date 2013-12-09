
var Bathroom = function(contact_json) {
    this.id = contact_json.id;
    this.building = contact_json.building;
    this.floor = contact_json.floor;
    this.roomNumber = contact_json.roomNumber;
    this.description = contact_json.description;
    this.gender = contact_json.gender;
};

Bathroom.prototype.makeCompactDiv = function() {
    var cdiv = $("<div></div>");
    cdiv.addClass('bathroom');

    var building_div = $("<div></div>");
    building_div.addClass('building');
    building_div.html(this.building + " " + this.floor + " " + this.roomNumber);
    cdiv.append(name_div);

    cdiv.data('contact', this);

    return cdiv;
};