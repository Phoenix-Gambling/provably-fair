# Phoenix: Provably Fair Verifier

Verifies that game results are provably fair.

#### Usage example
```
import Limbo from './Games/Limbo';

console.log(new Limbo().verify({
    serverSeed: 'example_server_seed',
    clientSeed: 'example_client_seed',
    nonce: 0
})); // Returns "1.07"
```
