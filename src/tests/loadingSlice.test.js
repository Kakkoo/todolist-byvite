import { loadingSliceDef } from "../loadingSlice.js";

function testloadingslice() {
    const fakeState = { value: { completed: true}};
    loadingSliceDef.reducers.loadingStarted(fakeState);
    if (fakeState.value.completed){
        throw new Error('It failed');
    } else {
        console.log('The loadingStarted reducer works!')
    }
}
testloadingslice();