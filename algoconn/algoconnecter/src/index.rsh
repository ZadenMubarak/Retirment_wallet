'reach 0.1';


const interface_ = {
    balance_:UInt,
    buymore: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  
  const walletholder = API('Holder'{
    balance:{View: interact.balance},
    buyMoreAlgo:interact.buymore,


  });

  init();
  // write your program here
    if (walletholder.buyMoreAlgo) {
        walletholder.Pay(interact.buymore)
        walletholder.publish()

    }
    if (interact.balance){
        {View: interact.balance}
        console.log(declassify(interact.balance))
    }
    commit();

});