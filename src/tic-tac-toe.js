class TicTacToe {
    constructor() {
        this.value='x';
        this.arr=[[null,null,null],[null,null,null],[null,null,null]];
        this.winner=null;
    }

    getCurrentPlayerSymbol() {
        return this.value;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.arr[rowIndex][columnIndex]){
            this.arr[rowIndex].splice(columnIndex,1,this.value);
            if(this.value==='x'){
                this.value='o';
            }else{
                this.value='x';
            }
        }
    }

    isFinished() {
        for(let i=0;i<this.arr.length;i++){
            if(this.arr[i][0]===this.arr[i][1]&&this.arr[i][0]===this.arr[i][2]&&this.arr[i][0]){
                this.winner=this.arr[i][0];
                return true;
            }else if(this.arr[0][i]===this.arr[1][i]&&this.arr[0][i]===this.arr[2][i]&&this.arr[0][i]){
                this.winner=this.arr[0][i];
                return true;
            }
        }
        if(this.arr[0][0]===this.arr[1][1]&&this.arr[0][0]===this.arr[2][2]&&this.arr[0][0]){
            this.winner=this.arr[0][0];
            return true;
        }
        if(this.arr[2][0]===this.arr[1][1]&&this.arr[2][0]===this.arr[0][2]&&this.arr[2][0]){
            this.winner=this.arr[2][0];
            return true;
        }
        if(this.noMoreTurns()){
            return true;
        }
        return false;
    }

    getWinner() {
        this.isFinished()
        return this.winner;
    }

    noMoreTurns() {
        let answer=true;
        for(let i=0;i<this.arr.length;i++){
            if(this.arr[i].indexOf(null)!==-1){
                answer=false;
                break;
            }
        }
        return answer;
    }

    isDraw() {
        if(this.noMoreTurns()&&!this.getWinner()){
            return true;
        }else{
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
