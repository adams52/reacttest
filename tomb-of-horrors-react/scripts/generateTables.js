function generateMainScreen(rollData, atmosphereData) {

}

function generateHumanTable(humans, npcData) {
	var columnHeaders = ["Name", "Dynastic Name", "Occupation or Affiliation", "Appearance", "Age",
		"Ability: High", "Ability: Low", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	var rowItems = ["firstname", "dynasticname", "appearance", "age", "abilityhigh", "abilitylow", "talent", "mannerism", "interactions", "ideal", "bond",
		"flaworsecret", "knowledge", "history"];

	var people = generateNpcList(10, rowItems, humans, npcData, "humans");

	ReactDOM.render(
		<NpcTable
			npcHeaders={columnHeaders}
			npcData={people}
		/>,
		document.getElementById('humansList')
	);
}

function generateDwarfTable(dwarves, npcData) {
	$("#dwarvesList").empty();

	var columnHeaders = ["First Name", "Son of...", "Occupation or Affiliation", "Age",
		"Ability: High", "Ability: Low", "Look", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	var rowItems = ["firstname", "lastname", "role", "age", "abilityhigh", "abilitylow", "appearance", "talent", "mannerism", "interactions",
		"ideal", "bond", "flaworsecret", "knowledge", "history"];

	var people = generateNpcList(10, rowItems, dwarves, npcData, "dwarves");

	ReactDOM.render(
		<NpcTable
			npcHeaders={columnHeaders}
			npcData={people}
		/>,
		document.getElementById('dwarvesList')
	);
}

function generateTabaxiTable(tabaxi, npcData) {
	$("#tabaxiList").empty();

	var columnHeaders = ["Name", "Clan Name", "Occupation or Affiliation", "Appearance", "Obsession", "Quirk", "Age",
		"Ability: High", "Ability: Low", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	var rowItems = ["firstname", "clanname", "occupation", "appearance", "obsession", "quirk", "age", "abilityhigh", "abilitylow", "talent",
		"mannerism", "interactions", "ideal", "bond", "flaworsecret", "knowledge", "history"];

		var people = generateNpcList(10, rowItems, tabaxi, npcData, "tabaxi");

		ReactDOM.render(
			<NpcTable
				npcHeaders={columnHeaders}
				npcData={people}
			/>,
			document.getElementById('tabaxiList')
		);
}

function generateTortleTable(tortles, npcData) {
	$("#tortlesList").empty();

	var columnHeaders = ["Name", "Appearance", "Role", "Age",
		"Ability: High", "Ability: Low", "Talent", "Mannerism", "Interaction with Other(s)", "Ideal",
		"Bond", "Flaw or Secret", "Has Knowledge of", "Has history with"];
	var rowItems = ["firstname", "appearance", "role", "age", "abilityhigh", "abilitylow", "talent",
		"mannerism", "interactions", "ideal", "bond", "flaworsecret", "knowledge", "history"];

		var people = generateNpcList(10, rowItems, tortles, npcData, "tortles");

		ReactDOM.render(
			<NpcTable
				npcHeaders={columnHeaders}
				npcData={people}
			/>,
			document.getElementById('tortlesList')
		);
}

function generateBatiriTable(batiris, npcData) {
	$("#batirisList").empty();

	var columnHeaders = ["Name", "Role", "Clan", "Age", "Look", "Trait", "Trait2", "Knows about or has history with"];
	var rowItems = ["name", "role", "clan", "age", "appearance", "personality1", "personality2", "history"];

	var people = generateNpcList(10, rowItems, batiris, npcData, "batiris");

	ReactDOM.render(
		<NpcTable
			npcHeaders={columnHeaders}
			npcData={people}
		/>,
		document.getElementById('batirisList')
	);
}

function generateGrungTable(grungs, npcData) {
	$("#grungsList").empty();

	var columnHeaders = ["First Name", "Role", "Color", "Age", "Look", "Trait", "Trait2", "Doesn't like", "Knows about or has history with"];
	var rowItems = ["name", "role", "color", "age", "appearance", "personality1", "personality2", "hates", "history"];

	var people = generateNpcList(10, rowItems, grungs, npcData, "grungs");

	ReactDOM.render(
		<NpcTable
			npcHeaders={columnHeaders}
			npcData={people}
		/>,
		document.getElementById('grungsList')
	);
}

function generateNpcList(numRows, itemList, corpus, npcData, race) {
	var people = [];
	for (var x = 0; x < numRows; x++) {
		var items = [];
		var npc = getNPC(corpus, npcData);
		var count = itemList.length;
		for(var i = 0; i < count; i++) {
			var item = itemList[i];
			items.push(populateTemplate(npc, item));
		}
		people.push(
			<Npc
				npcData = {items}
				race = {race}
				count = {x}
			/>
		);
	}
	return people;
}
