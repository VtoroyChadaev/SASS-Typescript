import { BinarySearchTree } from "./binary-search-tree";
import { distance } from "./distance";
import { UserInterface } from "./user-interface";
import { UserType } from "./user-type-alias";
import { User } from "./user";
import { AudioPlayerAdapter, LegacyAudioPlayer, MediaPlayer } from "./patterns/adapter";
import { NoDiscountStrategy, Order, PercentDiscountStrategy } from "./patterns/strategy";
import { NewsChannel, NewsPublisher } from "./patterns/observer";

const user: UserInterface = new User("Alex", 20);
user.hello();

const typedUser: UserType = new User("Maria", 21);
typedUser.hello();

console.log("Distance by coordinates:", distance(0, 0, 3, 4));
console.log("Distance by points:", distance({ x: 10, y: 20 }, { x: 13, y: 24 }));

const tree: BinarySearchTree<number> = new BinarySearchTree((left: number, right: number): number => left - right);
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
console.log("Tree:", tree.toArray());
console.log("Search 6:", tree.search(6));
console.log("Height:", tree.height());
tree.update(6, 7);
tree.delete(3);
console.log("Tree after update and delete:", tree.toArray());

const adaptedPlayer: MediaPlayer = new AudioPlayerAdapter(new LegacyAudioPlayer());
adaptedPlayer.play("track.mp3");

const order: Order = new Order(new NoDiscountStrategy());
console.log("Price without discount:", order.getFinalPrice(1000));
order.setStrategy(new PercentDiscountStrategy(15));
console.log("Price with discount:", order.getFinalPrice(1000));

const publisher: NewsPublisher = new NewsPublisher();
const firstChannel: NewsChannel = new NewsChannel("First channel");
const secondChannel: NewsChannel = new NewsChannel("Second channel");
publisher.subscribe(firstChannel);
publisher.subscribe(secondChannel);
publisher.publish("TypeScript strict mode is enabled.");
