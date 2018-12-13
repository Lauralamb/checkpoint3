'use strict'
$(document).ready(function(){
var player = {
    click: 0,
    step: 1,
    stepCost: 500,
    baseStepCost: 500,
    tick: 1000,
    CPS: 0,
    manualClicks: 0,
},
    worker = {
        cost: 15,
        amount: 0,
        CPS: 1,
        base: 15,
        times: 0,
        name: "#worker"
    },
    chef = {
        cost: 30,
        amount: 0,
        CPS: 5,
        base: 30,
        times: 0,
        name: "#chef"
    },
    manager = {
        cost: 100,
        amount: 0,
        CPS: 10,
        base: 100,
        times: 0,
        name: "#manager"
    },
    factory= {
        cost: 300,
        amount: 0,
        CPS: 50,
        base: 300,
        times: 0,
        name: "#factory"
    },
    truck= {
        cost: 500,
        amount: 0,
        CPS: 100,
        base: 500,
        times: 0,
        name: "#truck"
    },
    island = {
        cost: 5000,
        amount: 0,
        CPS: 200,
        base: 5000,
        times: 0,
        name: "#island"
    }



var player1 = player;
var times = 0;

$("#choc").click(function () {
    player.click += player.step;
    player.manualClicks++;
    updateDoc();
});
//worker
$('#worker').click(function(){
        if (player.click >= worker.cost) {
            worker.amount++;
            player.CPS = player.CPS + worker.CPS;
            player.click = player.click - worker.cost;
            player.click = +player.click.toFixed(2);
            // worker.cost = worker.base * Math.round(1, worker.amount);
            worker.cost = worker.base * Math.round(2, worker.amount);
            worker.cost = +worker.cost.toFixed(2);
            $('#workerAmount').text();
        } else {
            $(worker.name).addClass('btn-warning');
            window.setTimeout(function () {
                $(worker.name).removeClass('btn-warning');
            }, 250);
        }
    });

//chef
$('#chef').click(function(){
    if (player.click >= chef.cost) {
        chef.amount++;
        player.CPS = player.CPS + chef.CPS;
        player.click = player.click - chef.cost;
        player.click = +player.click.toFixed(2);
        chef.cost = chef.base * Math.round(2, chef.amount);
        chef.cost = +chef.cost.toFixed(2);
        $('#chefAmount').text();
    } else {
        $(chef.name).addClass('btn-warning');
        window.setTimeout(function () {
            $(chef.name).removeClass('btn-warning');
        }, 250);
    }
});
//manager
$('#manager').click(function(){
    if (player.click >= manager.cost) {
        manager.amount++;
        player.CPS = player.CPS + manager.CPS;
        player.click = player.click - manager.cost;
        player.click = +player.click.toFixed(2);
        manager.cost = manager.base * Math.round(2, manager.amount);
        manager.cost = +manager.cost.toFixed(2);
        $('#managerAmount').text();
    } else {
        $(manager.name).addClass('btn-warning');
        window.setTimeout(function () {
            $(manager.name).removeClass('btn-warning');
        }, 250);
    }
});
//factory
$('#factory').click(function(){
    if (player.click >= factory.cost) {
        factory.amount++;
        player.CPS = player.CPS + factory.CPS;
        player.click = player.click - factory.cost;
        player.click = +player.click.toFixed(2);
        factory.cost = factory.base * Math.round(2, factory.amount);
        factory.cost = +factory.cost.toFixed(2);
        $('#factoryAmount').text();
    } else {
        $(factory.name).addClass('btn-warning');
        window.setTimeout(function () {
            $(factory.name).removeClass('btn-warning');
        }, 250);
    }
});

//truck
$('#truck').click(function(){
if (player.click >= truck.cost) {
    truck.amount++;
    player.CPS = player.CPS + truck.CPS;
    player.click = player.click - truck.cost;
    player.click = +player.click.toFixed(2);
    truck.cost = truck.base * Math.round(2, truck.amount);
    truck.cost = +truck.cost.toFixed(2);
    $('#truckAmount').text();
} else {
    $(truck.name).addClass('btn-warning');
    window.setTimeout(function () {
        $(truck.name).removeClass('btn-warning');
    }, 250);
}
});
//island
$('#island').click(function(){
if (player.click >= island.cost) {
    island.amount++;
    player.CPS = player.CPS + island.CPS;
    player.click = player.click - island.cost;
    player.click = +player.click.toFixed(2);
    island.cost = island.base * Math.round(2, island.amount);
    island.cost = +island.cost.toFixed(2);
    $('#islandAmount').text();
} else {
    $(island.name).addClass('btn-warning');
    window.setTimeout(function () {
        $(island.name).removeClass('btn-warning');
    }, 250);
}
});
//2x
$('#clickName').click(function(increaseStep){
        if (player.click >= player.stepCost) {
            player.step++;
            player.click = player.click - player.stepCost;
            player.stepCost = player.baseStepCost * Math.round(2, player.step - 1); + player.click.toFixed(2); + player.stepCost.toFixed(2);
            updateDoc();
        }
});
var updateDoc;
updateDoc = function () {
    $("#total_clicks").html(player.click.toLocaleString());
    $("#TotalCPS").html(player.CPS.toLocaleString());
    $("#TotalCPS_Stats").html(player.CPS.toLocaleString());
    $("#workerAmount").html(worker.amount.toLocaleString());
    $("#workerCost").html(worker.cost.toLocaleString());
    $("#chefAmount").html( chef.amount.toLocaleString());
    $("#chefCost").html(chef.cost.toLocaleString());
    $("#managerAmount").html(manager.amount.toLocaleString());
    $("#managerCost").html(manager.cost.toLocaleString());
    $("#factoryAmount").html(factory.amount.toLocaleString());
    $("#factoryCost").html(factory.cost.toLocaleString());
    $("#truckAmount").html( truck.amount.toLocaleString());
    $("#truckCost").html(truck.cost.toLocaleString());
    $("#islandAmount").html(island.amount.toLocaleString());
    $("#islandCost").html(island.cost.toLocaleString());
    $("#clickCost").html(player.stepCost.toLocaleString());
    $("#perClick").html(player.step.toLocaleString());
    $("#manualClicks").html(player.manualClicks.toLocaleString());
    
};
var autoClick;
autoClick = setInterval(function () {
    player.click = player.click + player.CPS;
    updateDoc();
}, player.tick);

});
